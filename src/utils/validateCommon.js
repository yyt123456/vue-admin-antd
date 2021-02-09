/**
 *
 *
 */

export function isPhone(value) {
  const regPhong = /^1[3456789]\d{9}$/;
  if(value && regPhong.test(value)) {
    return true
  } else {
    return false
  }
}

export function isMail(value)  {
  const regPhong = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if(value && regPhong.test(value)) {
    return true
  } else {
    return false
  }
}

export function isCode(value)  {
  const regPhong = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6}$/;
  if(value && regPhong.test(value)) {
    return true
  } else {
    return false
  }
}

export function isPassword(value)  {
  const regPhong = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  if(value && regPhong.test(value)) {
    return true
  } else {
    return false
  }
}