<style lang="scss">
    @import "styles/util";

    div.wrapper {
        padding: 0;
        color: $light;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 26px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(198, 219, 11);
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>

<div class="wrapper">
    <i class="bi bi-sun-fill"></i>
    <div class="switch">
        <input type="checkbox" id="darkSwitch">
        <label class="slider round" for="darkSwitch"></label>
    </div>
    <i class="bi bi-moon-fill"></i>
</div>
