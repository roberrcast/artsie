import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { fetchFeaturedArtwork } from "../../store/artworksSlice";
import FeaturedSection from "../../components/FeaturedSection";

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFeaturedArtwork());
    }, [dispatch]);

    return (
        <div>
            <FeaturedSection />
        </div>
    );
};

export default memo(Home);
