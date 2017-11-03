BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Grid = Grid,
        Store = Data.Store,
        enumObj = {"1" : "选项一","2" : "选项二","3" : "选项三"},
        columns = [
            {title : 'lid',dataIndex :'lid'}, //editor中的定义等用于 BUI.Form.Field.Text的定义
            {title : 'lname', dataIndex :'lname'},
            {title : '操作',renderer : function(){
                return '<span class="grid-command btn-edit">编辑</span>'
            }}
        ]

    var isAddRemote = false,
        editing = new Grid.Plugins.DialogEditing({
            contentId : 'content', //设置隐藏的Dialog内容
            triggerCls : 'btn-edit', //触发显示Dialog的样式
            editor : {
                title : '自定义',
                width : 600,
                success:function(){
                    var edtor = this,
                    form = edtor.get('form');
                    //验证
                    form.valid();
                    if(form.isValid()){
                        form.ajaxSubmit({ //表单异步提交
                            url : "index.php?m=admin&f=showRoot&a=addRole",
                            data:form.serializeToObject(),
                            type:"post",
                            dataType:"text",
                            success : function(e){
                                if(e=='ok'){
                                    edtor.accept();
                                }
                                //将a 改成 1 测试一下显示错误
                                if(data.hasError){ //返回的数据是 {hasError : fasle,error : 'xxxx',field : 'xxx'},也可以是任意格式的数据如 ： {success : false,'error' : 'xxxxx'}
                                    var field = data.field;
                                    form.getField(field).showErrors([data.error]); //也可以多个字段的错误信息 例如 errors : [{field : 'a',error: 'addd'},{field : 'a',error: 'addd'}]
                                }else{
                                    edtor.accept();
                                }

                            },
                            error : function(){
                                //do something
                            }
                        });
                    }


                }
            }
        }),
        store = new Store({
            url : 'index.php?m=admin&f=showRoot&a=selectRole',
            autoLoad:true
        }),
        grid = new Grid.Grid({
            render:'#grid',
            columns : columns,
            width : 700,
            forceFit : true,
            tbar:{ //添加、删除
                items : [{
                    btnCls : 'button button-small',
                    text : '<i class="icon-plus"></i>添加',
                    listeners : {
                        'click' : addFunction
                    }
                },
                    {
                        btnCls : 'button button-small',
                        text : '<i class="icon-remove"></i>删除',
                        listeners : {
                            'click' : delFunction
                        }
                    }]
            },
            plugins : [editing,Grid.Plugins.CheckSelection],
            store : store
        });

    grid.render();

    //添加记录
    function addFunction(){
        var newData = {b : 0};
        editing.add(newData,'a'); //添加记录后，直接编辑
    }
    //删除选中的记录
    function delFunction(){
        var selections = grid.getSelection();
        store.remove(selections);
    }
});