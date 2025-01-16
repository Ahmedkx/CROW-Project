import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <>
            <div className="fixed-bg"></div>
            {/* <Nav /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
}
