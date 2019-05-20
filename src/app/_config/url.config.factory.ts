import { Configuration } from './../../api/service/configuration';
import { TokenService } from './../_service/token.service';

export function urlConfigFactory() {
    const token = new TokenService();
    return new Configuration({
        basePath: '',
        apiKeys: {'Authorization': token.get()}
      });
}
