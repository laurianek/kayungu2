import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { PortFolioData } from './services/portfolio-service'

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  PortFolioData
];
