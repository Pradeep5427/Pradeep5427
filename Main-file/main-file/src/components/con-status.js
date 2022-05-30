import { Offline, Online } from "react-detect-offline";

const Status = () => (
  <div>
    <Online className ="on">You are Online</Online>
    <Offline className ="off" >Turn on your internet</Offline>
  </div>
);

export default Status;