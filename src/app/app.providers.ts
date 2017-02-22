import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { PortFolioData } from './services/portfolio-data'

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  PortFolioData
];
