import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsWithWorks } from "../../store/artistsSlice";
import type { RootState, AppDispatch } from "../../store";
import { buildImageUrl } from "../../utils/imageUtils";
import DOMPurify from "dompurify";
import * as S from "./styles";
