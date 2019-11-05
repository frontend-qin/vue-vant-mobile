import request from "@/utils/request";

export const asyncBanner = () =>
  request({
    url: "/banner",
    methord: "GET"
  });
