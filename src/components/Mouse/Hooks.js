import React from 'react';

// https://reactjs.org/docs/hooks-intro.html
function useMousePosition() {
	const [position, setMousePosition] = React.useState({ x: 0, y: 0 });

	function handleMouseMove(e) {
		setMousePosition({ x: e.clientX, y: e.clientY });
	}

	React.useEffect(() => {
		// lifecycle: cDM cDU
		window.addEventListener('mousemove', handleMouseMove);

		// lifecycle: cWU
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return position;
}

export default function MouseRender() {
	const mouse = useMousePosition();

	return (
		<span>
			Hooks Mouse(X, Y): {mouse.x}, {mouse.y}
		</span>
	);
}
