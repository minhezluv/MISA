import BaseAPIConfig from "../base/BaseAPIConfig.js";

export default class BaseAPI {
    constructor() {
        this.controller = null;
    }

    /**
     * Hàm lấy tất cả dữ liệu nv
     * createdBy: NQMinh(02/08/2021)
     */
    getAll() {
        return BaseAPIConfig.get(`${this.controller}`);
    }

    /**
     * Hàm lấy dữ liệu bằng id
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     * Author: NQMinh(04/08/2021)
     */
    getById(id) {
        return BaseAPIConfig.get(`${this.controller}/${id}`);
    }

    /**
     * Hàm thêm mới dữ liệu
     * @param body
     * @returns {Promise<AxiosResponse<any>>}
     * Author: NQMinh(04/08/2021)
     */
    add(body) {
        return BaseAPIConfig.post(`${this.controller}`, body);
    }

    /**
     * Hàm lấy dữ liệu phân trang
     * @param {*} payload
     * createdBy: NQMinh(02/08/2021)
     */
    paging(payload) {
        return BaseAPIConfig.post(`${this.controller}/paging`, payload);
    }

    /**
     * Hàm cập nhật dữ liệu nv
     * @param {*} id
     * @param {*} body
     * createdBy: NQMinh(02/08/2021)
     */
    update(id, body) {
        return BaseAPIConfig.put(`${this.controller}/${id}`, body);
    }

    /**
     * Hàm xóa thông tin nv
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     * createdBy: NQMinh(02/08/2021)
     */
    delete(id) {
        return BaseAPIConfig.delete(`${this.controller}/${id}`);
    }
}