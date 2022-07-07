import { Outlet } from '@remix-run/react';
import Root from '~/components/Root';

export default function App() {
	return (
		<Root>
			<Outlet />
		</Root>
	);
}
