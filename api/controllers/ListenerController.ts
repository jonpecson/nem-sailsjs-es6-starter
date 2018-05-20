/**
 * ListenerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
import { Address, NEMLibrary, NetworkTypes, ConfirmedTransactionListener } from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

declare var sails: any;

export function listen(req: any, res: any, next: Function): any {
  // res.status(200).send('Hello from Typescript!');
  const user_address = req.body.address;

  const address = new Address(user_address);

  let confirmedTransactionListener = new ConfirmedTransactionListener().given(address);
  confirmedTransactionListener.subscribe(x => {
    console.log(x);
    res.send(x);
  }, err => {
    console.log(err);
  });




}
