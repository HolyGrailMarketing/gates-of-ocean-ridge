#!/bin/bash

echo "🖼️  Optimizing images for Gates of Ocean Ridge website..."

# Create optimized directories
mkdir -p public/images/optimized/exterior
mkdir -p public/images/optimized/interiors
mkdir -p public/images/optimized/logo
mkdir -p public/images/optimized/one-bedroom
mkdir -p public/images/optimized/two-bedroom
mkdir -p public/images/optimized/three-bedroom

# Function to optimize JPEG images
optimize_jpeg() {
    local input="$1"
    local output="$2"
    local quality="$3"
    local max_width="$4"
    
    echo "📸 Optimizing: $(basename "$input")"
    
    # Resize and optimize quality
    sips -s format jpeg -s formatOptions "$quality" --resampleWidth "$max_width" "$input" --out "$output" 2>/dev/null
    
    # Get file sizes
    original_size=$(stat -f%z "$input")
    optimized_size=$(stat -f%z "$output")
    reduction=$((100 - (optimized_size * 100 / original_size)))
    
    echo "   ✅ Reduced by ${reduction}% ($(numfmt --to=iec $original_size) → $(numfmt --to=iec $optimized_size))"
}

# Function to optimize PNG images
optimize_png() {
    local input="$1"
    local output="$2"
    local max_width="$3"
    
    echo "📸 Optimizing PNG: $(basename "$input")"
    
    # Resize PNG
    sips --resampleWidth "$max_width" "$input" --out "$output" 2>/dev/null
    
    # Get file sizes
    original_size=$(stat -f%z "$input")
    optimized_size=$(stat -f%z "$output")
    reduction=$((100 - (optimized_size * 100 / original_size)))
    
    echo "   ✅ Reduced by ${reduction}% ($(numfmt --to=iec $original_size) → $(numfmt --to=iec $optimized_size))"
}

echo ""
echo "🏗️  Optimizing exterior images (Hero & Gallery)..."
# Optimize exterior images - high quality for hero slideshow
for img in public/images/exterior/*.jpg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_jpeg "$img" "public/images/optimized/exterior/$filename" 85 1920
    fi
done

echo ""
echo "🏠 Optimizing interior images..."
# Optimize interior images - good quality for gallery
for img in public/images/interiors/*.jpg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_jpeg "$img" "public/images/optimized/interiors/$filename" 82 1200
    fi
done

echo ""
echo "🏠 Optimizing one-bedroom images..."
for img in public/images/one-bedroom/*.jpg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_jpeg "$img" "public/images/optimized/one-bedroom/$filename" 80 1200
    fi
done

echo ""
echo "🏠 Optimizing two-bedroom images..."
for img in public/images/two-bedroom/*.jpg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_jpeg "$img" "public/images/optimized/two-bedroom/$filename" 80 1200
    fi
done

echo ""
echo "🏠 Optimizing three-bedroom images..."
for img in public/images/three-bedroom/*.jpg; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_jpeg "$img" "public/images/optimized/three-bedroom/$filename" 80 1200
    fi
done

echo ""
echo "🎨 Optimizing logo images..."
for img in public/images/logo/*.png; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        optimize_png "$img" "public/images/optimized/logo/$filename" 400
    fi
done

echo ""
echo "📋 Optimizing floor plan PNGs..."
for img in public/images/one-bedroom/*.png public/images/two-bedroom/*.png public/images/three-bedroom/*.png; do
    if [[ -f "$img" ]]; then
        dir=$(dirname "$img")
        dirname=$(basename "$dir")
        filename=$(basename "$img")
        optimize_png "$img" "public/images/optimized/$dirname/$filename" 800
    fi
done

echo ""
echo "✅ Image optimization complete!"
echo "📊 Check the optimized folder for results."
echo "🚀 Remember to update your components to use the optimized images!"