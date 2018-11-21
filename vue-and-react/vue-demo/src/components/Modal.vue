<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot class="modal-title" name="title"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px
}

.modal-content {
  position: relative;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
  box-shadow: 0 3px 9px rgba(0,0,0,.5)
}

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5
}

.modal-header .close {
  margin-top: -2px
}

.modal-title {
  margin: 0;
  line-height: 1.42857143
}

.modal-body {
  position: relative;
  padding: 15px
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5
}

.modal-footer .btn+.btn {
  margin-bottom: 0;
  margin-left: 5px
}

.modal-footer .btn-group .btn+.btn {
  margin-left: -1px
}

.modal-footer .btn-block+.btn-block {
  margin-left: 0
}
</style>
