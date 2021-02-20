import Constants from "expo-constants";
import * as Permission from "expo-permission";


class Userpermissions {
   getCameraPermission = async () => {
      if (Constants.platform.ios) {
          const { status } = await Permission.askAsync(Permission.CAMERA_ROLL);

          if (status != "granted") {
              alert("We need permission to use your camera roll");
              
          }
      }
   };

}

export default new Userpermissions();