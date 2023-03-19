export default () => {
  let envConfig: IConfig = {};

  try {
    envConfig = require(`./config.${process.env.NODE_ENV}`).default;
    console.log('envConfig', envConfig);
  } catch (error) {}
  // 返回环境配置
  return envConfig;
};

export interface IConfig {
  /**
   * 数据库配置
   */
  database?: {
    type?: string;
    host?: string;
    port?: number | string;
    username?: string;
    password?: string;
    database?: string;
    autoLoadModels: boolean; // 如果为true，模型将自动载入（默认:false)
    synchronize?: boolean; //如果为true，自动载入的模型将同步
    logging?: any;
  };
}
