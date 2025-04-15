import { Route, Routes } from 'react-router';

import { Layout } from '~/components/Layout';
import { ROUTE_CONSTANTS } from '~/constants/routes';
import { HomePage } from '~/pages/HomePage';
import { JuicyPage } from '~/pages/JuicyPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { VeganCuisinePage } from '~/pages/VeganCuisinePage';

const AppRouter = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path={ROUTE_CONSTANTS.APP} element={<HomePage />} />
            <Route path={ROUTE_CONSTANTS.JUICY} element={<JuicyPage />} />
            <Route path={ROUTE_CONSTANTS.VEGAN_CUISINE} element={<VeganCuisinePage />} />
            <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
    </Routes>
);

export default AppRouter;
