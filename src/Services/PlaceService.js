import PhotoZoneService from "./PhotoZoneService";

const base_service =  new PhotoZoneService();

export default class PlaceService{
    
    getAllPlaces = () => base_service.getResourse('Place/GetAllPlaces');

    createNewPlace = (data) => base_service.setResource('Place/AddNewPlace', data);

    SearchPlaces = (data) => base_service.setResource('Place/SearchPlaces', data);
}
