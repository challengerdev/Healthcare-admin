import Auth from './Auth';
import Candidates from './Candidates';
import Company from './Company';
import Offers from './Offers';

export default {
  auth: new Auth(),
  candidates: new Candidates(),
  company: new Company(),
  offers: new Offers(),
};
