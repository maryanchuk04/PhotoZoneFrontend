import PhotoZoneService from "./PhotoZoneService";

const base_service =  new PhotoZoneService();

export default class PlaceService{
    
    getAllPlaces = () => base_service.getResourse('Place/GetAllPlaces');

    createNewPlace = (data) => base_service.setResource('Place/AddNewPlace', data);

    SearchPlaces = (data) => base_service.setResource('Place/SearchPlaces', data);

    getPlaceById = (id) => base_service.getResourse(`Place/GetPlaceById/${id}`);

    writeComment = (id, data) => base_service.setResourceAuth(`Place/WriteComment/${id}`,data);

    addImageToPlace = (id, data) => base_service.setResource(`Place/AddImageToPlace/${id}`,data);

    getPlaceByUserId = (id) => base_service.getResourse(`Place/GetAllPlacesByUserId/${id}`);
}
