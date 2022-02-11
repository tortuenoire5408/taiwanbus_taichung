import React from 'react';
import loadable from '@loadable/component';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const HomePage = loadable(() => import('./HomePage'));
const BlogPage = loadable(() => import('./BlogPage'));
const BlogContentPage = loadable(() => import('./BlogPage/BlogContentPage'));
const DrivingMapPage = loadable(() => import('./DrivingMapPage'));
const CollinearRoutesPage = loadable(() => import('./CollinearRoutesPage'));
const TravelPlannerPage = loadable(() => import('./TravelPlannerPage'));
const RouteMapListPage = loadable(() => import('./RouteMapListPage'));
const FarePage = loadable(() => import('./FarePage'));
const UserlinkPage = loadable(() => import('./UserlinkPage'));
const OtherlinksPage = loadable(() => import('./OtherlinksPage'));
const StopReportPage = loadable(() => import('./StopReportPage'));

import styleLayout from '../../../../assets/js/config/styleLayout';

const Main = (props) => {
    const { add, number } = props;
    return (
        <Box
            sx={(theme) => ({
                background: theme.main.background,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',

                width: '100%',
                minHeight: {
                    lg: styleLayout.mainHeight
                }, //扣掉Header、Footer
            })}
        >
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/blog' element={<BlogPage />} />
                <Route path='/blog/:blogId' element={<BlogContentPage />} />
                <Route path='/driving-map' element={<DrivingMapPage />} />
                <Route path='/travel-planner' element={<TravelPlannerPage />} />
                <Route path='/collinear-routes' element={<CollinearRoutesPage />} />
                <Route path='/route-map-list' element={<RouteMapListPage />} />
                <Route path='/fare/all' element={<FarePage />} />
                <Route path='/userlink' element={<UserlinkPage />} />
                <Route path='/other-links' element={<OtherlinksPage />} />
                <Route path='/stop-report' element={<StopReportPage />} />
            </Routes>
        </Box >
    );
}

export default Main;