Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Bitmap]::FromFile("i:\Infibook Dubai\public\logo.png")
# crop just the owl (top portion), leave the baked-in text behind
$cropX = 70; $cropY = 12; $cropW = 360; $cropH = 322
$crop = New-Object System.Drawing.Bitmap $cropW, $cropH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($crop)
$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$dstRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$g.DrawImage($src, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose(); $src.Dispose()

$w = $crop.Width; $h = $crop.Height
$rect = New-Object System.Drawing.Rectangle 0,0,$w,$h
$data = $crop.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride; $len = $stride * $h
$bytes = New-Object byte[] $len
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $len)

$thr = 235
$n = $w*$h
$visited = New-Object 'bool[]' $n
$qx = New-Object System.Collections.Generic.Queue[int]
$qy = New-Object System.Collections.Generic.Queue[int]
function Off([int]$x,[int]$y){ return ($y*$stride + $x*4) }
function IsWhite([int]$o){ return ($bytes[$o] -ge $thr -and $bytes[$o+1] -ge $thr -and $bytes[$o+2] -ge $thr) }

for($x=0;$x -lt $w;$x++){ foreach($y in @(0,($h-1))){ $i=$y*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x $y))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y) } } }
for($y=0;$y -lt $h;$y++){ foreach($x in @(0,($w-1))){ $i=$y*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x $y))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y) } } }
while($qx.Count -gt 0){
  $x=$qx.Dequeue(); $y=$qy.Dequeue(); $o=Off $x $y; $bytes[$o+3]=0
  if($x -gt 0){ $i=$y*$w+($x-1); if(-not $visited[$i] -and (IsWhite (Off ($x-1) $y))){ $visited[$i]=$true; $qx.Enqueue($x-1); $qy.Enqueue($y) } }
  if($x -lt $w-1){ $i=$y*$w+($x+1); if(-not $visited[$i] -and (IsWhite (Off ($x+1) $y))){ $visited[$i]=$true; $qx.Enqueue($x+1); $qy.Enqueue($y) } }
  if($y -gt 0){ $i=($y-1)*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x ($y-1)))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y-1) } }
  if($y -lt $h-1){ $i=($y+1)*$w+$x; if(-not $visited[$i] -and (IsWhite (Off $x ($y+1)))){ $visited[$i]=$true; $qx.Enqueue($x); $qy.Enqueue($y+1) } }
}
[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $len)
$crop.UnlockBits($data)
$crop.Save("i:\Infibook Dubai\public\owl-mark.png", [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
"owl-mark.png saved ($w x $h)"
