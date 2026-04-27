import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { fetchFeaturedArtwork } from "../../store/artworksSlice";
import FeaturedSection from "../../components/FeaturedSection";
import ExhibitionsSection from "../../components/ExhibitionsSection";
import HeroBanner from "../../components/WelcomeBanner";

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchFeaturedArtwork());
    }, [dispatch]);

    return (
        <div>
            <HeroBanner />
            <FeaturedSection />
            <ExhibitionsSection />
        </div>
    );
};

export default memo(Home);

// Id de imagen para para posible banner de bienvenida 43761
