import axios from 'axios'
import qs from 'qs'
import {
  API_ROOT
} from '../config'

// get方法
function fetch(child) {
  return new Promise((resolve, reject) => {
    axios.get(API_ROOT + child).then((response) => {
      resolve(response.data)
    }, reject)
  })
}

// post方法
function post(child, obj) {
  return new Promise((resolve, reject) => {
    axios.post(API_ROOT + child, qs.stringify(obj)).then((response) => {
      resolve(response.data)
    }, reject)
  })
}

// 获取典型案例列表
export function fetchTypicalCaseList(limit) {
  return fetch(`GetTypicalCaseList.php?num=${limit}`)
}

// 获取典型案例详细页
export function fetchTypicalCaseInfo(id) {
  return fetch(`GetTypicalCaseInfo.php?id=${id}`)
}

// 获取诉讼常识列表
export function fetchSscsList() {
  return fetch(`GetSscsList.php`)
}

// 获取诉讼常识详细页
export function fetchSscsInfo(title) {
  return fetch(`GetSscsInfo.php?title=${title}`)
}

// 获取法院列表
export function fetchMapList() {
  return fetch(`getCourtList.php`)
}

// 获取法院详细页
export function fetchMapInfo(name) {
  return fetch(`CourtInfoDetail.php?name=${name}`)
}

// 获取执行常识列表
export function fetchZxcsList() {
  return fetch(`GetZxcsList.php`)
}

// 获取执行常识详细页
export function fetchZxcsInfo(title) {
  return fetch(`GetZxcsInfo.php?title=${title}`)
}

// 获取执行工作相关法律规定列表
export function fetchZxgzflgdList() {
  return fetch(`GetZxgzflgdList.php`)
}

// 获取执行工作相关法律规定详细页
export function fetchZxgzflgdInfo(title) {
  return fetch(`GetZxgzflgdInfo.php?title=${title}`)
}

// 获取浙江高院执行工作列表
export function fetchZjgyzxgdList() {
  return fetch(`GetZjgyzxgdList.php`)
}

// 获取浙江高院执行工作详细页
export function fetchZjgyzxgdInfo(title) {
  return fetch(`GetZjgyzxgdInfo.php?title=${title}`)
}

// 搜索裁判文书列表
export function postJudgmentBookList(obj) {
  return post(`searchJudgmentBookList.php`, obj)
}

// 获取裁判文书详细页
export function fetchJudgmentBookDeatil(id) {
  return fetch(`searchJudgmentBookDeatil.php?id=${id}`)
}

// 获取听证公告列表
export function postNoticeTZList(limit) {
  return post(`GetNoticeTZList.php`, limit)
}

// 获取听证公告详细页
export function fetchNoticeTZInfo(id) {
  return fetch(`GetNoticeTZInfo.php?id=${id}`)
}

// 搜索开庭公告列表
export function postNoticeKTList(obj) {
  return post(`GetNoticeKTList.php`, obj)
}

// 搜索送达公告列表
export function postNoticeSDList(obj) {
  return post(`GetNoticeSDList.php`, obj)
}

// 获取送达公告详细页
export function fetchNoticeSDInfo(id) {
  return fetch(`GetNoticeSDInfo.php?id=${id}`)
}

// 获取新闻列表
export function fetchCourtDTList(id, limit) {
  return fetch(`GetCourtDTList.php?catalogid=${id}&pagesize=${limit}`)
}

// 获取新闻详细页
export function fetchCourtDTContent(id) {
  return fetch(`GetCourtDTContent.php?articleid=${id}`)
}

// 获取新闻发布会列表
export function fetchCourtNewsList(id) {
  return fetch(`GetCourtNewsList.php?catalogid=${id}`)
}

// 获取曝光台列表
export function postCreditList(obj) {
  return post(`GetCreditList.php`, obj)
}

// 获取执行惩戒列表
export function postLimitList(obj) {
  return post(`GetLimitList.php`, obj)
}

// 获取司法文件中的最高法院指导文件列表
export function fetchCourtHighestGuideFileList(limit) {
  return fetch(`GetCourtHighestGuideFileList.php?endIndex=${limit}`)
}

// 获取司法文件中的最高法院指导文件详情
export function fetchCourtHighestGuideFileInfo(id) {
  return fetch(`GetCourtHighestGuideFileInfo.php?id=${id}`)
}

// 获取司法文件中的浙江省法院指导文件列表
export function fetchCourtGuideFileList(limit) {
  return fetch(`GetCourtGuideFileList.php?endIndex=${limit}`)
}

// 获取司法文件中的浙江省法院指导文件详情
export function fetchCourtGuideFileInfo(id) {
  return fetch(`GetCourtGuideFileInfo.php?id=${id}`)
}

// 获取立案公示列表
export function fetchCommuteGSList(city) {
  return fetch(`GetCommuteGSList.php?courtName=${city}`)
}

// 获取立案公示详情
export function fetchCommuteGSInfo(id) {
  return fetch(`GetCommuteGSInfo.php?id=${id}`)
}

// 获取减刑假释中的开庭公告列表
export function fetchExecuteInformationList(limit) {
  return fetch(`GetExecuteInformationList.php?endIndex=${limit}`)
}

// 获取减刑假释中的开庭公告详情
export function fetchExecuteInformationInfo(id) {
  return fetch(`GetExecuteInformationInfo.php?id=${id}`)
}

// 获取减刑假释中的裁判文书列表
export function fetchCommuteParoleDocumentList(limit) {
  return fetch(`GetCommuteParoleDocumentList.php?endIndex=${limit}`)
}

// 获取减刑假释中的开庭公告详情
export function fetchCommuteParoleDocumentInfo(id) {
  return fetch(`GetCommuteParoleDocumentInfo.php?id=${id}`)
}