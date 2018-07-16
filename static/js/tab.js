     ;(function($){
        var Tab = function(dom){
    
            this.tab = dom;

            var defaut = {   //默认配置信息
                type:"click",  //触发方式
                effect:"fade",  //显示的方式
                auto:false   //如果auto！=false 则显示的是速度毫秒
            }

            var config = $(this.tab).attr("data-config");  //获取配置信息
            if(typeof(config)=="string"){
            config = eval("(" + config + ")")
            }
            var opt = $.extend({},defaut,config);  //总的配置参数

            this.animateType(opt);
            
            if(opt.auto){
                this.index = 1;
                this.auto(opt);
                this.loop;
                this.stop(opt);
            }

        }

        Tab.prototype.animateType = function(opt){   //根据配置的方式触发tab切换
                var this_ = this;
                if(opt.type=="click"){
                    $(this.tab).find("li").click(function(){
                        var index = $(this).index();
                        this_.index = index;
                        this_.fun(index,opt.effect);
                    })
                }else if(opt.type=="mouseover"){
                    $(this.tab).find("li").mouseover(function(){
                            var index = $(this).index();
                            this_.index = index;
                            this_.fun(index,opt.effect);
                    })
                }
        }

        Tab.prototype.auto = function(opt){   //自动播放
                
                var this_ = this;
                this.loop = setInterval(function(){
                    
                    this_.fun(this_.index,opt.effect);
                    this_.index ++;
                    if( this_.index >= $(this_.tab).find("li").length){
                        this_. index = 0;
                    }
                },opt.auto);
        }

        Tab.prototype.stop =function(opt){  //启停自动播放
                var this_ = this;
                $(this.tab).hover(function(){
                    clearInterval(this_.loop);
                },function(){
                    this_.auto(opt);
                })
        }

        Tab.prototype.fun = function(index,effect){   //效果方法
        
                $(this.tab).find("li").eq(index).addClass("active").siblings().removeClass("active");
                
                if(effect=="fade"){
                    $(this.tab).find(".tab_item").eq(index).fadeIn(1000).siblings().hide();
                }

                $(this.tab).find(".tab_item").eq(index).addClass("active").siblings().removeClass("active");
        
        }

        //抛出给外部调用
        $.fn.extend({
            tab:function(){
                $(this).each(function(){
                    new Tab(this);
                })
            }
        })

    })(jQuery);