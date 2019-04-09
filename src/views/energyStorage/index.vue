<template>
  <div class="dashboard-editor-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-col :span="24" :xs="24" :sm="24" :lg="8">
        <el-card shadow="never" :body-style="{ padding: '10px' }">
          <div slot="header" class="clearfix">
            <el-row>
              <el-col :xs="24" :sm="24" :lg="24" style="height:20px">
                <span>{{ $t('energyStorage.SystemData.SystemData') }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="24" class="m-t-s">
                <el-input :placeholder="$t('energyStorage.PleaseEnterTheContent')" v-model="form.text"
                  class="input-with-select" size="mini">
                  <el-select v-model="form.sel" clearable :placeholder="$t('energyStorage.SystemData.SortBy')"
                    slot="prepend" style="width:120px" type="text" size="mini">
                    <el-option :label=" $t('energyStorage.SystemData.All') " value="1"></el-option>
                    <el-option :label=" $t('energyStorage.SystemData.Normal')" value="2"></el-option>
                    <el-option :label=" $t('energyStorage.SystemData.Protection') " value="3"></el-option>
                    <el-option :label=" $t('energyStorage.SystemData.Fault')" value="4"></el-option>
                    <el-option :label=" $t('energyStorage.SystemData.Offline')" value="5"></el-option>
                  </el-select>
                  <el-select v-model="form.typeSelect" slot="append"
                    :placeholder="$t('energyStorage.SystemData.SearchBy')" style="width:120px">
                    <el-option :label=" $t('energyStorage.SystemData.SystemSN') " value="1"></el-option>
                    <el-option :label="$t('energyStorage.SystemData.Desc')" value="2"></el-option>
                    <el-option :label="$t('energyStorage.SystemData.UserName')" value="3"></el-option>
                    <el-option :label="$t('energyStorage.SystemData.License')" value="4"></el-option>
                  </el-select>
                </el-input>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="24" class="m-t-s">
                <el-button-group style="width:100%;">
                  <el-button type="primary" icon="el-icon-success" class="buttom_g_item" size="mini">
                    {{$t('energyStorage.SystemData.All')}}
                    <div class="buttom_g_flag">22</div>
                  </el-button>
                  <el-button type="success" icon="el-icon-success" class="buttom_g_item" size="mini">
                    {{$t('energyStorage.SystemData.Normal')}}
                    <div class="buttom_g_flag">23</div>
                  </el-button>
                  <el-button type="warning" icon="el-icon-success" class="buttom_g_item" size="mini">
                    {{$t('energyStorage.SystemData.Protection')}}
                    <div class="buttom_g_flag">2</div>
                  </el-button>
                  <el-button type="danger" icon="el-icon-success" class="buttom_g_item" size="mini">
                    {{$t('energyStorage.SystemData.Fault')}}
                    <div class="buttom_g_flag">0</div>
                  </el-button>
                  <el-button type="info" icon="el-icon-success" class="buttom_g_item" size="mini">
                    {{$t('energyStorage.SystemData.Offline')}}
                    <div class="buttom_g_flag">55</div>
                  </el-button>
                </el-button-group>
              </el-col>
            </el-row>
          </div>
          <el-collapse v-model="activeNameTwo" accordion>
            <el-collapse-item name="1">
              <template slot="title" style="pointer-events: none;">
                <i class="header-icon el-icon-view" style="color:green;"></i>AE0000317090017
                <i class="header-icon el-icon-share" style="float:right;color:#aaa;" @click.stop="openTest()"></i>
              </template>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/solar.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">{{$t('energyStorage.SystemData.PVP')}}</div>
                  <span>{{$t('energyStorage.SystemData.PVIC')}}5.0KW</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/inverter.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">{{$t('energyStorage.SystemData.Inverter')}}</div>
                  <span>{{$t('energyStorage.SystemData.Npow')}}4.9KW</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/battery.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">{{$t('energyStorage.SystemData.Battery')}}</div>
                  <span>{{$t('energyStorage.SystemData.InsCap')}}5.4KWh</span>
                  <span style="padding-left:3rem">{{$t('energyStorage.SystemData.UniCap')}}4.9KWh</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/model.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">{{$t('energyStorage.SystemData.SysModel')}}</div>
                  <span>{{$t('energyStorage.SystemData.Stor')}}S5</span>
                </el-col>
              </el-row>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title" style="pointer-events: none;">
                <i class="header-icon el-icon-view" style="color:green;"></i>AE0000317090017
                <i class="header-icon el-icon-share" style="float:right;color:#aaa;" @click.stop="openTest()"></i>
              </template>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/solar.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">Solar Moduley</div>
                  <span>Nominal Power:2.9KW</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/inverter.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">Solar Moduley</div>
                  <span>Nominal Power:2.9KW</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/battery.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">Solar Moduley</div>
                  <span>Nominal Power:2.9KW</span>
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="4" :sm="3" :lg="3">
                  <img src="./../../assets/img/model.png" class="collapse_item_img">
                </el-col>
                <el-col :span="20">
                  <div class="collapse_item_title">Solar Moduley</div>
                  <span>Nominal Power:2.9KW</span>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <el-tab-pane :label="$t('energyStorage.tabBar.Si')" name="1" class="tab_panle">
        <keep-alive>
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <el-button type="primary" size="mini">
                <i class="el-icon-caret-left"></i>
                {{ $t('energyStorage.SystemData.SystemData') }}
              </el-button>
              <el-button style="float:right;" size="mini" type="text">操作按钮</el-button>
              <el-date-picker style="float: right; padding: 0 3px" size="mini" v-model="form.timePicker"
                type="daterange" :range-separator="$t('energyStorage.RightPanel.To')"
                :start-placeholder="$t('energyStorage.RightPanel.BeginDate')"
                :end-placeholder="$t('energyStorage.RightPanel.EndData')"></el-date-picker>
            </div>
            <div>222222222222222</div>
          </el-card>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Pd')" name="2" class="tab_panle">
        <keep-alive>
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
              <span style="line-height: 28px;">{{ $t('energyStorage.RightPanel.NMonitoring') }}</span>
              <el-date-picker v-model="form.timepicker2" style="float: right;" type="date" size="mini"
                :placeholder="$t('energyStorage.RightPanel.ChooseDate')"></el-date-picker>
            </div>
            <div class="pie-data-container pie-5">
              <div class="pie-data-item">
                <div class="pie-data-title">PV</div>
                <div class="pie-data-content">
                  <div id="pie_chart_one" style="width:100%;height:180px;"></div>
                  <div class="options">Today's Generation</div>
                  <div class="options">5.0KW</div>
                </div>
              </div>
              <div class="pie-data-item">
                <div class="pie-data-title">LOAD</div>
                <div class="pie-data-content">
                  <div id="pie_chart_two" style="width:100%;height:180px;"></div>
                  <div class="options">Today's Generation</div>
                  <div class="options">5.0KW</div>
                </div>
              </div>
              <div class="pie-data-item">
                <div class="pie-data-title">BATTERY</div>
                <div class="pie-data-content">
                  <div id="pie_chart_three" style="width:100%;height:180px;"></div>
                  <div class="options">Today's Generation</div>
                  <div class="options">5.0KW</div>
                </div>
              </div>
              <div class="pie-data-item">
                <div class="pie-data-title">FEED-IN</div>
                <div class="pie-data-content">
                  <div id="pie_chart_four" style="width:100%;height:180px;"></div>
                  <div class="options">Today's Generation</div>
                  <div class="options">5.0KW</div>
                </div>
              </div>
              <div class="pie-data-item">
                <div class="pie-data-title">Grid Consumption</div>
                <div class="pie-data-content">
                  <div id="pie_chart_five" style="width:100%;height:180px;"></div>
                  <div class="options">Today's Generation</div>
                  <div class="options">5.0KW</div>
                </div>
              </div>
            </div>
          </el-card>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Sd')" name="3" class="tab_panle">{{$t('energyStorage.tabBar.Sd')}}
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Prd')" name="4" class="tab_panle">
        <keep-alive>
          <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix" style="background-color:#cdcdcd">
              <el-row>
                <el-col :xs="12" :sm="4" :lg="4" class="profi_title">
                  <span style="line-height: 28px;">{{ $t('energyStorage.RightPanel.Profit') }}</span>
                </el-col>
                <el-col :xs="12" :sm="4" :lg="4">
                  <img src="./../../assets/img/profit-pig.png" style="width:160px;height:85px;margin: 0 auto;">
                </el-col>
                <el-col :xs="24" :sm="12" :lg="16" class="profi_progress">
                  <span> Total Income RMB 235.78</span>
                  <span style="float: right;padding:0px 8px"> Total Investment RMB 235.78 <i class="el-icon-setting" /></span>
                  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
                </el-col>
              </el-row>



            </div>

          </el-card>
        </keep-alive>

      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Ss')" name="5" class="tab_panle">{{$t('energyStorage.tabBar.Ss')}}
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Ir')" name="6" class="tab_panle">{{$t('energyStorage.tabBar.Ir')}}
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Rl')" name="7" class="tab_panle">{{$t('energyStorage.tabBar.Rl')}}
      </el-tab-pane>
      <el-tab-pane :label="$t('energyStorage.tabBar.Da')" name="8" class="tab_panle">{{$t('energyStorage.tabBar.Da')}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import local from "./local"; //本模块 语言包
  import {
    debounce
  } from "@/utils";

  export default {
    data() {
      return {
        activeName: "4",
        activeNameTwo: "",
        form: {
          timePicker: [],
          timepicker2: new Date(),
          selectFist: "" //左侧 系统数据 第一个下拉框
        }
      };
    },
    methods: {
      //echarts
      initChart() {
        this.chart_one = this.$echarts.init(
          document.getElementById("pie_chart_one")
        );
        this.chart_two = this.$echarts.init(
          document.getElementById("pie_chart_two")
        );
        this.chart_three = this.$echarts.init(
          document.getElementById("pie_chart_three")
        );
        this.chart_four = this.$echarts.init(
          document.getElementById("pie_chart_four")
        );
        this.chart_five = this.$echarts.init(
          document.getElementById("pie_chart_five")
        );
        this.chart_one.setOption({
          title: {
            text: "0.3KW",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: "100%",
              color: "#E6A23C"
            }
          },
          series: [{
            color: ["#E6A23C", "#d6d6d6"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["75%", "85%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 6,
                name: "额定功率"
              },
              {
                value: 44,
                name: ""
              }
            ]
          }]
        });
        this.chart_two.setOption({
          title: {
            text: "0.3KW",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: "100%",
              color: "#409eff"
            }
          },
          series: [{
            color: ["#409eff", "#d6d6d6"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["75%", "85%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 6,
                name: "额定功率"
              },
              {
                value: 44,
                name: ""
              }
            ]
          }]
        });
        this.chart_three.setOption({
          title: {
            text: "0.3KW",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: "100%",
              color: "#3daf2c"
            }
          },
          series: [{
            color: ["#3daf2c", "#d6d6d6"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["75%", "85%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 6,
                name: "额定功率"
              },
              {
                value: 44,
                name: ""
              }
            ]
          }]
        });
        this.chart_four.setOption({
          title: {
            text: "0.3KW",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: "100%",
              color: "#e42d2f"
            }
          },
          series: [{
            color: ["#e42d2f", "#d6d6d6"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["75%", "85%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 6,
                name: "额定功率"
              },
              {
                value: 44,
                name: ""
              }
            ]
          }]
        });
        this.chart_five.setOption({
          title: {
            text: "0.3KW",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: "100%",
              color: "#E6A23C"
            }
          },
          series: [{
            color: ["#E6A23C", "#d6d6d6"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["75%", "85%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "left"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
                value: 6,
                name: "额定功率"
              },
              {
                value: 44,
                name: ""
              }
            ]
          }]
        });
      },
      openTest() {
        console.log(111);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {
      //注册本模块翻译代码
      if (!this.$i18n.getLocaleMessage("en")["energyStorage"]) {
        this.$i18n.mergeLocaleMessage("en", local.en);
        this.$i18n.mergeLocaleMessage("zh", local.zh);
        this.$i18n.mergeLocaleMessage("es", local.es);
      }
      //注册地图 脚本
    },
    mounted() {
      this.initChart();
      this.__resizeHandler = debounce(() => {
        if (this.chart_one) {
          this.chart_one.resize();
          this.chart_two.resize();
          this.chart_three.resize();
          this.chart_four.resize();
          this.chart_five.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    },
    beforeDestroy() {
      //销毁检测
      if (!this.chart_one) {
        return;
      }
      window.removeEventListener("resize", this.__resizeHandler);
      this.chart_one.dispose();
      this.chart_two.dispose();
      this.chart_three.dispose();
      this.chart_four.dispose();
      this.chart_five.dispose();
      this.chart_one = null;
      this.chart_two = null;
      this.chart_three = null;
      this.chart_four = null;
      this.chart_five = null;
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "./energyStorage.less";

.profi_title{
    line-height: 60px;
    text-align: left;
    padding-left: 2%;
    font-size: 2rem;
    color: #ffff40;
    text-shadow:6px 3px 3px #824f4f
}
.profi_progress{
  font-size:12px;
  font-weight: 600; 
    margin: 2% 0 0;
     padding-right: 0.5%;
}
  /deep/ .el-range-separator {
    padding: 4px 0px;
  }

  @media (min-width: 1200px) {
    .tab_panle {
      width: 66%;
      float: right;
    }
  }

  @media (max-width: 560px) {
    .el-date-editor {
      width: 100%;
    }
  }

  /deep/ .el-collapse-item__content {
    padding-bottom: 0px !important;
    margin-bottom: 0px;
    font-size: 0.6rem;
  }

  .collapse_item {
    &_img {
      margin: 8px 0px 8px 10px;
      height: 50px;
      width: 50px;
    }

    &_title {
      line-height: 2.5rem;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .header-icon {
    padding-right: 10px;
    font-size: 18px;
    line-height: 40px;
  }

  .buttom_g {
    &_item {
      height: 30px;
      width: 20%;
      padding: 2px 0px 2px 3px;
      text-align: left;
    }

    &_flag {
      padding-left: 1.28rem;
    }
  }

  /deep/ .el-card__body {
    padding: 0px 8px 0px 8px !important;

    .el-collapse {
      border: 0px;

      &-item__header {
        height: 40px;
        line-height: 40px;
      }

      &-item__arrow {
        line-height: 40px;
      }
    }
  }

  .m-t-s {
    margin-top: 8px;
  }

  .dashboard-editor-container {
    padding: 0px 8px;
  }

  /deep/ .el-card__header {
    padding: 6px;
  }

  .clearfix {
    font-weight: 600;
    font-size: 1rem;
    padding: 0px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

</style>
