export interface Artwork {
    id: number;
    title: string;
    artist_display: string;
    image_id: string;
    date_display?: string;
    medium_display?: string;
    dimensions?: string;
    credit_line?: string;
    description?: string;
    short_description?: string;
    style_title?: string;
    place_of_origin?: string;
    is_public_domain?: boolean;
    thumbnail?: {
        alt_text: string;
        width: number;
        height: number;
    };
}

export interface Artist {
    id: number;
    title: string;
    birth_date?: number;
    death_date?: number;
    description?: string;
    is_artist?: boolean;
}

export interface Exhibition {
    id: number;
    title: string;
    short_description?: string;
    image_url?: string;
    gallery_title?: string;
    api_model?: string;
    aic_start_at?: string;
    aic_end_at?: string;
    web_url?: string;
}
