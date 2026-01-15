# Conway's Game of Life - Angular

An interactive implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) built with Angular 19.

![Angular](https://img.shields.io/badge/Angular-19-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Interactive Canvas**: Click to add/remove individual cells or place gliders
- **Glider Mode**: Place gliders moving in any of four directions
- **Adjustable Cell Size**: Change the simulation resolution with the pixel size slider
- **Start Patterns**: Begin with a random pattern or blank canvas
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Dark theme with smooth animations and visual feedback

## Tech Stack

- **Angular 19** with standalone components
- **Signals** for reactive state management
- **OnPush** change detection for optimal performance
- **requestAnimationFrame** for smooth simulation rendering
- **Modern CSS** with custom properties and flexbox/grid layouts

## Getting Started

### Prerequisites

- Node.js 18.19.1 or higher
- npm 10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/AngularLife.git
cd AngularLife

# Install dependencies
npm install

# Start the development server
npm start
```

Navigate to `http://localhost:4200/` in your browser.

### Build for Production

```bash
npm run build-prod
```

The build artifacts will be stored in the `dist/AngularLife` directory.

## How to Play

1. **Select a starting pattern** from the dropdown (Random or Blank)
2. **Click on the canvas** to add cells or gliders
3. **Toggle Glider mode** to switch between placing single cells and gliders
4. **Choose glider direction** using the direction picker (↖ ↗ ↙ ↘)
5. **Adjust cell size** using the slider (available before starting)
6. **Press Start** to begin the simulation
7. **Press Stop** to pause and **Reset** to start over

## Game Rules

Conway's Game of Life follows these simple rules:

1. Any live cell with fewer than 2 live neighbors dies (underpopulation)
2. Any live cell with 2 or 3 live neighbors survives
3. Any live cell with more than 3 live neighbors dies (overpopulation)
4. Any dead cell with exactly 3 live neighbors becomes alive (reproduction)

The grid wraps around at the edges (toroidal topology).

## Project Structure

```
src/app/
├── game-model/           # Core game logic
│   ├── cell.ts           # Cell class and data types
│   ├── grid.ts           # Grid management and generation calculation
│   ├── glider-direction.ts
│   ├── life-form-helper.ts
│   └── start-options.ts
├── life-canvas/          # Main canvas component
├── life-control/         # Simulation controls
├── glider-mode-switch/   # Glider mode toggle
├── pixel-size-control/   # Cell size slider
├── life-control.service.ts  # Central state management
├── app.component.ts      # Root component
├── app.config.ts         # Application configuration
└── app.routes.ts         # Route definitions
```

## Performance Optimizations

- **Double buffering** for grid state to avoid allocation during simulation
- **Neighbor counting** optimization - only tracks changes, not full recalculation
- **requestAnimationFrame** for smooth, efficient rendering
- **OnPush change detection** on all components
- **Differential painting** - only repaints cells that changed state

## Development

```bash
# Run tests
npm test

# Run linter
npm run lint

# Run development server
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) by John Horton Conway
- Built with [Angular](https://angular.dev/)
