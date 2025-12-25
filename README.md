# Stopwatch ⏱️

A fully-featured stopwatch application built with vanilla HTML, CSS, and JavaScript. Accurately tracks elapsed time with millisecond precision and intuitive controls.

## Features

- ⏱️ **Precise Timing**: Accurate millisecond tracking (HH:MM:SS.MS format)
- 🚀 **Start/Stop**: Begin and pause timing with dedicated buttons
- 🔄 **Reset**: Clear elapsed time and return to zero
- ⌨️ **Keyboard Controls**: Space to start/stop, R to reset
- 🎨 **Responsive Design**: Clean, modern interface on all devices
- 📱 **Mobile Friendly**: Touch-optimized buttons for easy operation
- 🎯 **Accessible**: ARIA labels and semantic HTML

## File Structure

```
STOPWATCH/
  stop-watch.html    # Complete stopwatch application (HTML, CSS, and JavaScript)
```

## How to Run

### Method 1: Open Directly in Browser
1. Navigate to the `STOPWATCH` folder
2. Double-click on `stop-watch.html` to open it in your default web browser
3. Start timing!

### Method 2: Using a Local Server (Recommended)
For better performance and compatibility, use a simple HTTP server:

**With Python:**
```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

**With Node.js (using http-server):**
```bash
npx http-server
```

Then open `http://localhost:8000/STOPWATCH/stop-watch.html` in your browser.

## How to Use

1. **Start**: Click the "Start" button to begin timing
2. **Stop**: Click the "Stop" button to pause the timer (button changes from Start to Stop)
3. **Reset**: Click the "Reset" button to clear the elapsed time
4. **Resume**: Click "Start" again to continue timing from where you stopped

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Start/Stop |
| `R` | Reset |

## Display Format

The timer displays time in the format: **HH:MM:SS.MS**

- **HH**: Hours (00-99)
- **MM**: Minutes (00-59)
- **SS**: Seconds (00-59)
- **MS**: Milliseconds (00-99)

### Example:
- `00:00:05.50` = 5.5 seconds
- `00:01:30.75` = 1 minute 30.75 seconds
- `01:23:45.99` = 1 hour 23 minutes 45.99 seconds

## Browser Compatibility

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Internet Explorer 11+ ⚠️ (limited support)

## Technical Details

- **No Dependencies**: Pure JavaScript, no frameworks required
- **Single File**: All code contained in one HTML file
- **Accessible**: ARIA labels for screen readers
- **Lightweight**: Minimal CSS for fast loading
- **Optimized Timing**: Uses `requestAnimationFrame` for smooth, accurate updates

## Tips for Best Performance

- Use a modern browser (Chrome, Firefox, Safari, Edge)
- For critical timing measurements, avoid switching tabs frequently
- The stopwatch maintains accuracy even during other browser activities

## License

Open source - Feel free to use and modify as needed.
