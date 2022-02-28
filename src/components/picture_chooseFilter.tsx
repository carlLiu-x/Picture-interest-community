import React from "react";

class FilterChoose extends React.Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {
            
        }
    }
    
    render(): React.ReactNode {
        return(
            <div className = "filter_box">
                <div className = "filter_box_inner">
                    <div className = "AddPost_box_main_container_top">
                        <h1 className = "AddPost_box_title">滤镜选择</h1>
                    </div>
                    <div className = "filter_choose_box">
                        <div className = "filter_choose_box_1">
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}