import { AxiosResponse } from 'axios';
import axiosInstance from '../components/utils/axiosInterceptors';
import { RegressionModel} from '../models/AddRegressionRequest';


class VariableService {
  addVariable(data: FormData): Promise<AxiosResponse<RegressionModel>> {
    return axiosInstance.post<RegressionModel>("/excel", data);
  }
}

export default new VariableService();
