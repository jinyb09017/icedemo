//此文件用于定义全局的请求

const baseUrl = 'http://localhost:8080/';
export const userProfile = {
  url: '/api/profile',
  method: 'GET',
};

const getAllBusiness = {
  url: baseUrl + 'newconfig/business/list',
  method: 'GET',
};


function addBus(data) {
  return {
    url: baseUrl + 'newconfig/business/add',
    method: 'POST',
    ContextType: 'application/json',
    data: data,
  }
}

function delBus(param) {
  return {
    url: baseUrl + 'newconfig/business/del',
    method: 'GET',
    params: param,
  }
}

function addDim(data) {
  return {
    url: baseUrl + 'newconfig/dimension/add',
    method: 'POST',
    ContextType: 'application/json',
    data: data,
  }
}
/**
 * 查询某个业务所有dim信息
 * @param {} param 
 */
function getAllDim(param) {
  return {
    url: baseUrl + 'newconfig/dimension/list',
    method: 'GET',
    params: param,
  }
}
/**
 * 删除。只需要id即可
 * @param {} param 
 */
function delDim(param) {
  return {
    url: baseUrl + 'newconfig/dimension/del',
    method: 'GET',
    params: param,
  }
}



export { getAllBusiness, addBus,delBus,getAllDim, addDim,delDim};