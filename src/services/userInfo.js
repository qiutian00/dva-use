import request from "../utils/request";

export function query() {
  return request("/api/users");
}

export async function queryTableData(params) {
  console.log("service userInfo queryTableData");

  return request("/api/users", {
    method: "GET"
  });

  // this used i modal
  //   yield call(request,'/api/users',{
  //     body:JSON.stringify(user),
  //     method:'POST'
  // });
}
