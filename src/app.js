import "./style/index.scss";
import { getUserRequest, getEducationsRequest } from "./action/request";
import render from "./action/render";

render(getUserRequest("1"), getEducationsRequest("1"));