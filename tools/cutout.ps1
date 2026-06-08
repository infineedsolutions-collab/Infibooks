param(
  [string]$In  = "i:\Infibook Dubai\public\hero-person.jpg",
  [string]$Out = "i:\Infibook Dubai\public\hero-person.png"
)
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile($In)
$w = $src.Width; $h = $src.Height
$bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0, $w, $h)
$g.Dispose(); $src.Dispose()

$rect = New-Object System.Drawing.Rectangle 0,0,$w,$h
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$len = $stride * $h
$bytes = New-Object byte[] $len
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $len)

$thr = 240            # connected-white background threshold (all channels >= thr)
$n = $w * $h
$visited = New-Object 'bool[]' $n
$qx = New-Object System.Collections.Generic.Queue[int]
$qy = New-Object System.Collections.Generic.Queue[int]

function Off([int]$x,[int]$y){ return ($y*$stride + $x*4) }
function IsWhite([int]$o){ return ($bytes[$o] -ge $thr -and $bytes[$o+1] -ge $thr -and $bytes[$o+2] -ge $thr) }

# seed: every border pixel that is white
for($x=0;$x -lt $w;$x++){
  foreach($y in @(0,($h-1))){
    $i=$y*$w+$x
    if(-not $visited[$i] -and (IsWhite (Off $x $y))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y) }
  }
}
for($y=0;$y -lt $h;$y++){
  foreach($x in @(0,($w-1))){
    $i=$y*$w+$x
    if(-not $visited[$i] -and (IsWhite (Off $x $y))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y) }
  }
}

# flood fill 4-neighbour
while($qx.Count -gt 0){
  $x=$qx.Dequeue(); $y=$qy.Dequeue()
  $o=Off $x $y
  $bytes[$o+3]=0      # alpha 0 -> transparent
  # neighbours
  if($x -gt 0){ $i=$y*$w+($x-1); if(-not $visited[$i] -and (IsWhite (Off ($x-1) $y))){ $visited[$i]=$true; $qx.Enqueue($x-1); $qy.Enqueue($y) } }
  if($x -lt $w-1){ $i=$y*$w+($x+1); if(-not $visited[$i] -and (IsWhite (Off ($x+1) $y))){ $visited[$i]=$true; $qx.Enqueue($x+1); $qy.Enqueue($y) } }
  if($y -gt 0){ $i=($y-1)*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x ($y-1)))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y-1) } }
  if($y -lt $h-1){ $i=($y+1)*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x ($y+1)))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y+1) } }
}

# defringe: soften white halo on subject edges (pixels still opaque, near-white, touching transparency)
for($y=1;$y -lt $h-1;$y++){
  for($x=1;$x -lt $w-1;$x++){
    $i=$y*$w+$x
    if($visited[$i]){ continue }
    $o=Off $x $y
    if($bytes[$o+3] -eq 0){ continue }
    # touches a transparent (visited) neighbour?
    $edge = $visited[($y*$w+$x-1)] -or $visited[($y*$w+$x+1)] -or $visited[(($y-1)*$w+$x)] -or $visited[(($y+1)*$w+$x)]
    if(-not $edge){ continue }
    $mn = [Math]::Min([Math]::Min($bytes[$o],$bytes[$o+1]),$bytes[$o+2])
    if($mn -ge 232){
      $a = (250 - $mn) * 13
      if($a -lt 0){ $a = 0 }; if($a -gt 255){ $a = 255 }
      $bytes[$o+3]=[byte]$a
    }
  }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $len)
$bmp.UnlockBits($data)
$bmp.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$cleared = ($visited | Where-Object { $_ }).Count
"saved $Out  ($w x $h)  bg-pixels-cleared=$cleared / $n"
