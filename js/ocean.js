AFRAME.registerComponent("ocean", {
    schema:{
        model_obj: {type:"string", default:"./assets/Ocean_Island/tinker.obj"},
        model_mtl: {type:"string", default:"./assets/Ocean_Island/obj.mtl"},
    },
    init: function(){
        this.el.setAttribute("obj-model", {
            obj: this.data.model_obj,
            mtl: this.data.model_mtl
        });

        var scale = 1.5
        this.el.setAttribute("scale", { x: scale, y: scale, z:scale })
    }
})

AFRAME.registerComponent("rotate-ocean", {
    schema:{
        speed: {type:"number", default:0}
    },
    init: function(){
        window.document.addEventListener("keydown", (e)=>{
            if (e.key === "a" || e.key === "ArrowLeft"){
                this.data.speed = -0.5
            }
            else if (e.key === "d" || e.key === "ArrowRight"){
                this.data.speed = 0.5
            }
        })
        window.document.addEventListener("keyup", (e)=>{
            this.data.speed = 0
        })
    },
    tick: function(){
        var map_rotation = this.el.getAttribute("rotation");
        map_rotation.y += this.data.speed;
        this.el.setAttribute("rotation", {
            x: map_rotation.x,
            y: map_rotation.y,
            z: map_rotation.z
        })
    }
})