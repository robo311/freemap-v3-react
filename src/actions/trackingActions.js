import * as at from 'fm3/actionTypes';

export function trackingSetTrackedDevices(devices) {
  return { type: at.TRACKING_SET_TRACKED_DEVICES, payload: devices };
}

export function trackingSetDevices(devices) {
  return { type: at.TRACKING_SET_DEVICES, payload: devices };
}

export function trackingModifyDevice(id) {
  return { type: at.TRACKING_MODIFY_DEVICE, payload: id };
}

export function trackingDeleteDevice(id) {
  return { type: at.TRACKING_DELETE_DEVICE, payload: id };
}

export function trackingSaveDevice(device) {
  return { type: at.TRACKING_SAVE_DEVICE, payload: device };
}

export function trackingLoadDevices() {
  return { type: at.TRACKING_LOAD_DEVICES };
}

export function trackingSetAccessTokens(accessTokens) {
  return { type: at.TRACKING_SET_ACCESS_TOKENS, payload: accessTokens };
}

export function trackingModifyAccessToken(id) {
  return { type: at.TRACKING_MODIFY_ACCESS_TOKEN, payload: id };
}

export function trackingDeleteAccessToken(id) {
  return { type: at.TRACKING_DELETE_ACCESS_TOKEN, payload: id };
}

export function trackingSaveAccessToken(accessToken) {
  return { type: at.TRACKING_SAVE_ACCESS_TOKEN, payload: accessToken };
}

export function trackingLoadAccessTokens() {
  return { type: at.TRACKING_LOAD_ACCESS_TOKENS };
}
