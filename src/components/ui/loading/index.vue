<template>
    <div class="ui-loading">
        <span class="ui-loading__content"><span></span></span>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
.ui-loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content {
        position: absolute;
        pointer-events: none;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;

        span {
            display: flex;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            border: 2px solid transparent;
            border-top-color: currentColor;
            border-bottom-color: currentColor;
            border-radius: 50%;
            position: relative;
            animation: spin 1.5s linear infinite;

            &:before {
                content: '';
                display: block;
                border-radius: 50%;
                animation: pulse 1s alternate ease-in-out infinite;
                width: 8px;
                height: 8px;
                border: 2px solid currentColor;
            }
        }
    }
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes pulse {
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1);
    }
}
</style>
