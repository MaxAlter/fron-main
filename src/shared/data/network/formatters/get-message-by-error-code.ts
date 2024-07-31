import {
  COMMON_ERROR_MESSAGE,
  HTTP_404_ERROR_NOT_FOUND_MESSAGE,
  HTTP_422_ERROR_VALIDATION_MESSAGE,
  HTTP_500_ERROR_MESSAGE,
} from '../constants'

export const getMessageByErrorCode = (code: number) => {
  switch (code) {
    case 422: {
      return HTTP_422_ERROR_VALIDATION_MESSAGE
    }
    case 404: {
      return HTTP_404_ERROR_NOT_FOUND_MESSAGE
    }
    case 500: {
      return HTTP_500_ERROR_MESSAGE
    }
    default: {
      return COMMON_ERROR_MESSAGE
    }
  }
}
