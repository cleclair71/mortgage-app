import React from "react";
import { Box, Heading, Divider, useColorModeValue } from "@chakra-ui/react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponent = withScriptjs(withGoogleMap(() => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 44.330615, lng: -76.162109 }}
  >
    <Marker position={{ lat: 44.330615, lng: -76.162109 }} />
  </GoogleMap>
));

const Location = () => {
  const color = useColorModeValue("custom.text", "custom.backgroundWhite");

  return (
    <Box mt={10} ml={10}>
      <Heading as="h1" size="2xl" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{opacity: "1"}}>Where we are located</Heading>
      <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
        loadingElement={<Box height={`100%`} />}
        containerElement={<Box height={`400px`} />}
        mapElement={<Box height={`100%`} />}
      />
    </Box>
  );
};

export default Location;