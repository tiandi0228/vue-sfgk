import axios from 'axios'
import qs from 'qs'
import { API_ROOT } from '../config'

// get方法
function fetch(child) {
  return new Promise((resolve, reject) => {
    axios.get(API_ROOT + child).then((response) => {
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