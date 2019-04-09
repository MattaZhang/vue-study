<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :lg="6" class="m-t-s">
        <div class="chart-wrapper">
          <el-col :span="12" style="height:100%;">
            <div class="top-text">{{ $t('chartView.RunningStatus') }}</div>
            <div id="pie_chart" style="width:100%;height:95%;"></div>
            <div class="bottom-text">{{ $t('chartView.All') }}</div>
          </el-col>
          <el-col :span="12" class="countText">
            <el-row :span="24" :gutter="10" class="countText_ban">
              <el-col :span="12" class="countText_middle">
                <div class="text">{{ $t('chartView.Normal') }}</div>
                <count-to :start-val="0" :end-val="6" :duration="2000" class="green example" />
              </el-col>
              <el-col :span="12" class="countText_middle">
                <div class="text">{{ $t('chartView.Protection') }}</div>
                <count-to :start-val="0" :end-val="0" :duration="2000" class="yellow example" />
              </el-col>
            </el-row>
            <el-row :span="24" :gutter="10" class="countText_ban">
              <el-col :span="12" class="countText_middle">
                <div class="text">{{ $t('chartView.Fault') }}</div>
                <count-to :start-val="0" :end-val="1" :duration="2000" class="red example" />
              </el-col>
              <el-col :span="12" class="countText_middle">
                <div class="text">{{ $t('chartView.Offline') }}</div>
                <count-to :start-val="0" :end-val="44" :duration="3000" class="gray example" />
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="m-t-s">
        <div class="chart-wrapper">
          <el-col :span="12" style="height:100%;">
            <div class="top-text">{{ $t('chartView.SystemData') }}</div>
            <div id="pie_chart_two" style="width:100%;height:95%;"></div>
            <div class="bottom-text">{{ $t('chartView.SpontaneousSelfUseRatio') }}</div>
          </el-col>
          <el-col :span="12" class="countText">
            <el-row :span="24" :gutter="10" class="countText_ban">
              <el-col :span="24" class="countText_middle">
                <div class="text">{{ $t('chartView.GenerationCapacity') }}</div>
                <count-to :start-val="0" :end-val="11.2" :decimals="1" :duration="2000" class="red example"></count-to>
                <p class="p_pie">GWh</p>
              </el-col>
            </el-row>
            <el-row :span="12" :gutter="10" class="countText_ban">
              <el-col :span="24" class="countText_middle">
                <div class="text">{{ $t('chartView.PowerTransmissionNetwork') }}</div>
                <count-to :start-val="0" :end-val="10.8" :decimals="1" :duration="2000" class="yellow example" />
                <p class="p_pie">GWh</p>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="m-t-s">
        <div class="chart-wrapper">
          <el-col :span="12" style="height:100%;">
            <div class="top-text">{{ $t('chartView.SystemData') }}</div>
            <div id="pie_chart_tree" style="width:100%;height:95%;"></div>
            <div class="bottom-text">{{ $t('chartView.SpontaneousSelfUseRatio') }}</div>
          </el-col>
          <el-col :span="12" class="countText">
            <el-row :span="24" :gutter="10" class="countText_ban">
              <el-col :span="24" class="countText_middle">
                <div class="text">{{ $t('chartView.StorageCapacity') }}</div>
                <count-to :start-val="0" :end-val="4834.3" :decimals="1" :duration="2000" class="red example">
                </count-to>
                <p class="p_pie">MWh</p>
              </el-col>
            </el-row>
            <el-row :span="12" :gutter="10" class="countText_ban">
              <el-col :span="24" class="countText_middle">
                <div class="text">{{ $t('chartView.ElectricityWithdrawalFromPowerGrid') }}</div>
                <count-to :start-val="0" :end-val="104.3" :decimals="1" :duration="2000" class="yellow example" />
                <p class="p_pie">MWh</p>
              </el-col>
            </el-row>
          </el-col>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :lg="6" class="m-t-s">
        <div class="chart-wrapper">
          <el-col :span="12" style="height:100%;">
            <div class="top-text">{{ $t('chartView.InstalledCapacity') }}</div>
            <div style="width:100%;height:95%; text-align: center; ">
              <img src="./../../assets/img/usable.png" style="margin: 10% auto;">
            </div>
            <div class="bottom-text" style="margin-top:-20%">
              <count-to :start-val="0" :end-val="619.9" :decimals="1" :duration="2000" class="red example"
                :suffix="' KWh'" />
            </div>
          </el-col>
          <el-col :span="12" style="height:100%;">
            <div class="top-text"></div>
            <div style="width:100%;height:95%; text-align: center; ">
              <img src="./../../assets/img/inverter.png" style="margin: 10% auto;">
            </div>
            <div class="bottom-text" style="margin-top:-20%">
              <count-to :start-val="0" :end-val="305.0" :decimals="1" :duration="2000" class="yellow example"
                :suffix="' KW'" />
            </div>
          </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row class="m-t-s">
      <GMaps id="allmap" class="Gmaps"></GMaps>
    </el-row>
    <el-row class="m-t-s">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :xs="24" :sm="24" :lg="6">
              <span>{{ $t('chartView.SystemData') }}</span>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="18">
              <el-input :placeholder="$t('chartView.PleaseEnterTheContent')" v-model="form.text"
                class="input-with-select" style="float: right;width:340px;padding-left:8px" size="mini">
                <el-select v-model="form.typeSelect" slot="prepend" :placeholder="$t('chartView.QueryMode')"
                  style="width:120px">
                  <el-option :label=" $t('chartView.SystemSN') " value="1"></el-option>
                  <el-option :label="$t('chartView.Desc')" value="2"></el-option>
                  <el-option :label="$t('chartView.UserName')" value="3"></el-option>
                  <el-option :label="$t('chartView.License')" value="4"></el-option>
                  <el-option :label="$t('chartView.CountryRegion')" value="5"></el-option>
                  <el-option :label="$t('chartView.Postcode')" value="6"></el-option>
                  <el-option :label="$t('chartView.BMSSoftwareVersionNumber')" value="7"></el-option>
                  <el-option :label="$t('chartView.EMSSoftwareVersionNumber')" value="8"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <el-select v-model="form.sel" clearable :placeholder="$t('chartView.DeviceStatus')"
                style="float: right;width:130px" type="text" size="mini">
                <el-option :label=" $t('chartView.All') " value="1"></el-option>
                <el-option :label=" $t('chartView.Normal')" value="2"></el-option>
                <el-option :label=" $t('chartView.Protection') " value="3"></el-option>
                <el-option :label=" $t('chartView.Fault')" value="4"></el-option>
                <el-option :label=" $t('chartView.Offline')" value="5"></el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
        <el-table :data="tableProps.data" style="width: 100%">
          <el-table-column :label="$t('chartView.COUNTRYAREA')" prop="country" minWidth="135" align="center" />
          <el-table-column :label="$t('chartView.SN')" minWidth="175" align="center">
            <template slot-scope="scope">
              <span class="link-type" @click="appendTo(scope.row)">{{scope.row.sn}}</span>
            </template>
          </el-table-column>
          <el-table-column :label="$t('chartView.SYSTEMSTATUS')" prop="SystemStatus" minWidth="140" align="center" />
          <el-table-column :label="$t('chartView.BMS')" prop="BMS" minWidth="90" align="center" />
          <el-table-column :label="$t('chartView.EMS')" prop="EMS" minWidth="90" align="center" />
          <el-table-column :label="$t('chartView.BATTERY')" prop="battery" minWidth="85" />
          <el-table-column :label="$t('chartView.INVERTER')" prop="inverter" minWidth="95" align="center" />
          <el-table-column :label="$t('chartView.ACH')" prop="ACH" minWidth="125" align="center" />
          <el-table-column :label="$t('chartView.TYPE')" prop="type" minWidth="80" />
          <el-table-column :label="$t('chartView.LICENSENO')" prop="licene" minWidth="145" align="center" />
          <el-table-column :label="$t('chartView.INSTALLERCOMPANY')" prop="installerCompany" minWidth="175"
            align="center" />
          <el-table-column :label="$t('chartView.INSTALLATIONDATE')" prop="isntallationDate" minWidth="170" />
          <el-table-column :label="$t('chartView.REMARK')" prop="remark" minWidth="90" />
        </el-table>
        <pagination v-show="tableProps.total>0" :total="tableProps.total" :page.sync="tableProps.page"
          :limit.sync="tableProps.limit" @pagination="getList" style="float:right" />
      </el-card>
    </el-row>
  </div>
</template>


<script>
  require("echarts/theme/macarons"); // echarts theme主题
  import local from "./local"; //本模块 语言包
  const chartView = "chartView"; //初始化语言包 前缀
  import Pagination from "@/components/Pagination"; // 分页 Secondary package based on el-pagination
  import CountTo from "vue-count-to";
  import {
    mapGetters
  } from "vuex";
  import GMaps from "@/components/GoogleMaps/ChinaGmaps";
  import {
    debounce
  } from "@/utils";

  export default {
    name: "Dashboard",

    data() {
      const pagination = {
        currentPage: 1, //+this.$route.query.currentPage ||
        limit: 10, //当页显示条数
        pageSizes: [10, 20, 30, 50],
        total: 1
      };
      return {
        tableProps: {
          ...{
            data: [{
              country: "China",
              sn: "AE0000317090017(T50)",
              SystemStatus: 1,
              BMS: "V2.40",
              EMS: "V1.02.88A",
              battery: "M48112-S",
              inverter: "V1.02",
              ACH: "AC",
              type: "off-grid",
              licene: "ALPHA0001123456",
              installerCompany: "alpha",
              isntallationDate: "2018-12-03 07:07:41",
              remark: "Nothing"
            }]
          },
          ...pagination
        },
        chart: null,
        lang: this.$store.state.app.language,
        form: {
          sel: "",
          typeSelect: "",
          text: ""
        }
      };
    },

    components: {
      CountTo,
      GMaps,
      Pagination
    },
    computed: {
      ...mapGetters(["name", "roles"]),
      language() {
        return this.$store.state.app.language;
      }
    },
    watch: {
      language() {
        this.lang = this.language;
        this.setAllOption();
      }
    },
    created() {
      //注册本模块翻译代码
      if (!this.$i18n.getLocaleMessage("en")[chartView]) {
        this.$i18n.mergeLocaleMessage("en", local.en);
        this.$i18n.mergeLocaleMessage("zh", local.zh);
        this.$i18n.mergeLocaleMessage("es", local.es);
      }
      //注册地图 脚本
    },
    methods: {
      appendTo(row) {
        console.log(row);
        this.$router.push({
          name: "EnergyStorage",
          params: {
            id: row.SystemSN
          }
        });
      },
      //列表获取
      getList() {
        let res = {
          status: 1,
          message: "success",
          data: {
            total: 200,
            data: [{
              country: "China",
              sn: "AE0000317090017(T50)",
              SystemStatus: 1,
              BMS: "V2.40",
              EMS: "V1.02.88A",
              battery: "M48112-S",
              inverter: "V1.02",
              ACH: "AC",
              type: "off-grid",
              licene: "ALPHA0001123456",
              installerCompany: "alpha",
              isntallationDate: "2018-12-03 07:07:41",
              remark: "Nothing"
            }]
          }
        };
        if (res.status === 1) {
          this.listQuery = {
            ...this.listQuery,
            ...res.data
          };
        }
      },
      //加载脚本
      getMapScript() {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = this.maps["lang"];
        document.body.appendChild(s);
      },
      setAllOption() {
        if ((this.lang = "zh")) {
          //调用 document script 方式 生成新的 map 路由  同时重新定义  googlemap     但是/地图信息 接口不调用   数据放在缓存里面
        }
        //重置数据
      },
      initChart() {
        this.chart = this.$echarts.init(
          document.getElementById("pie_chart"),
          "macarons"
        );
        this.chart_two = this.$echarts.init(
          document.getElementById("pie_chart_two"),
          "macarons"
        );
        this.chart_tree = this.$echarts.init(
          document.getElementById("pie_chart_tree"),
          "macarons"
        );
        this.chart.setOption({
          title: {
            text: "51",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: 18
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },

          series: [{
            color: ["green", "yellow", "red", "#bbb"],
            animationDuration: 4000,
            name: "运行状况",
            type: "pie",
            radius: ["50%", "60%"],
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
                name: "正常"
              },
              {
                value: 0,
                name: "保护"
              },
              {
                value: 1,
                name: "故障"
              },
              {
                value: 44,
                name: "脱机"
              }
            ]
          }]
        });
        this.chart_two.setOption({
          title: {
            text: "2%",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: 18
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },

          series: [{
            color: ["green", "#bbb"],
            animationDuration: 4000,
            name: "自发自用占比",
            type: "pie",
            radius: ["50%", "60%"],
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
                value: 2,
                name: "自发自用电量"
              },
              {
                value: 98,
                name: "非自发电量"
              }
            ]
          }]
        });
        this.chart_tree.setOption({
          title: {
            text: "69%",
            x: "center",
            y: "center",
            textStyle: {
              fontWeight: "bolder",
              align: "center",
              fontSize: 18
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },

          series: [{
            color: ["green", "#bbb"],
            animationDuration: 4000,
            name: "自给自足占比",
            type: "pie",
            radius: ["50%", "60%"],
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
                value: 69,
                name: "自给自足"
              },
              {
                value: 31,
                name: "非自给自足"
              }
            ]
          }]
        });
      }
    },
    mounted() {
      //检测 图标自适应
      this.initChart();
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
          this.chart_two.resize();

          this.chart_tree.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    },
    beforeDestroy() {
      //销毁检测
      if (!this.chart) {
        return;
      }
      window.removeEventListener("resize", this.__resizeHandler);
      this.chart.dispose();
      this.chart = null;
      this.chart_two.dispose();
      this.chart_two = null;
      this.chart_tree.dispose();
      this.chart_tree = null;
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .m-t-s {
    margin-top: 8px;
  }

  .clearfix {
    font-weight: 700;
    color: grey;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }

  .countText {
    width: 40%;
    padding-top: 8px;
    height: 100%;

    &_ban {
      height: 50%;
    }

    &_middle {
      height: 100%;
      padding: 10%;
      text-align: center;

      .text {
        font-size: 12px;
      }

      .p_pie {
        display: inline;
        font-weight: 600;
      }
    }
  }

  .example {
    font-size: 20px;
    display: inline-block;
    margin: 15px 0;
    text-align: center;
    font-weight: 700;
  }

  .green {
    color: green;
  }

  .yellow {
    color: #ff9900;
  }

  .red {
    color: red;
  }

  .gray {
    color: #bbb;
  }

  .dashboard {
    margin: 8px;

    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

  .top-text {
    padding: 8px 0px 0px 8px;
    height: 0px;
    font-size: 14px;
    font-weight: 800;
    color: #888;
    font-family: "Dosis", sans-serif;
  }

  .bottom-text {
    height: 8px;
    font-size: 14px;
    font-weight: 500;
    margin-top: -12%;
    text-align: center;
    width: 100%;
    font-family: "Dosis", sans-serif;
  }

  .dashboard-editor-container {
    padding: 0px 8px;

    .chart-wrapper {
      border-radius: 5px;
      background: #fff;
      height: 180px;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: red;
  }

  .bg-purple {
    background: red;
  }

  .bg-purple-light {
    background: red;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
