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