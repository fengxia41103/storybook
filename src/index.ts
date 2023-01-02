import "antd/dist/antd.less";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "./components/atoms/Breadcrumb/Breadcrumb";
import Button from "./components/atoms/Button";
import Icon, { IconSet } from "./components/atoms/Icon";
import Input from "./components/atoms/Input";
import Switch from "./components/atoms/Switch";
import Toggle from "./components/atoms/Toggle";
import Tooltip from "./components/atoms/Tooltip";
import { IconSet29 } from "./components/atoms/v29Icon";
import ActionItemList from "./components/controls/ActionItemList";
import ActionPagination from "./components/controls/ActionPagination";
import CronEditor from "./components/controls/CronEditor";
import DashboardList from "./components/controls/DashboardList";
import DashboardListItem from "./components/controls/DashboardListItem/DashboardListItem";
import DetailData from "./components/controls/DetailData";
import ExploreQueryResult from "./components/controls/ExploreQueryResult";
import NewQueryResult from "./components/controls/ExploreQueryResult/NewQueryResult";
import FieldType, {
  isBinaryField,
  isEmbedList,
  isNumberLikeField,
  isSimpleList,
  isStrLikeField,
  isString,
  isTimeField,
} from "./components/controls/FilterItem/FieldType";
import FilterTag from "./components/controls/FilterTag";
import FilterBuilder from "./components/controls/FilterTag/FilterBuilder";
import ItemList from "./components/controls/ItemList";
import QueryBuilder, {
  getFilterType2DimArray,
  getReadableFilterTagInExploreAndQueryResult,
  getReadableFilterTags,
} from "./components/controls/QueryBuilder";
import { QueryBuilderDrawer } from "./components/controls/QueryBuilder/QueryBuilderDrawer";
import {
  generateMql,
  generateQueryTemplate,
} from "./components/controls/QueryBuilder/QueryBuilderHelper";
import QueryResult, {
  FilterableQueryResultTable,
} from "./components/controls/QueryResult";
import RecordDetail from "./components/controls/RecordDetail";
import Tabs, { TabPane } from "./components/controls/Tabs";
import {
  format,
  formatToChip,
  formatToLinkChip,
  getFieldFriendlyValue,
} from "./components/controls/utils";
import { MicrosoftSignInButton } from "./components/provider/MicrosoftAuthProvider";

export { getFieldFriendlyValue, format, formatToChip, formatToLinkChip };
export { Button };
export { Input };
export { Switch };
export { Tooltip };
export { Toggle };
export { Tabs };
export { Breadcrumb };
export { BreadcrumbItem };
export { TabPane };
export { default as Alert } from "./components/atoms/Alert";
export { default as Chip } from "./components/atoms/Chip";

export { ItemList };
export { ActionItemList };
export { DashboardListItem };
export { DashboardList };
export { ActionPagination };
export { Icon, IconSet };
export { IconSet29 };
export { default as DashboardCollectionList } from "./components/controls/DashboardCollectionList";
export { default as SettingCard } from "./components/controls/SettingCard";
export { default as CardList } from "./components/controls/CardList";
export { default as ActionCardList } from "./components/controls/ActionCardList";
export { default as ChartWithoutPermission } from "./components/controls/ChartWithoutPermission";
export { default as MegaMenu } from "./components/controls/MegaMenu";
export { default as ModalTitleBar } from "./components/controls/Modal/ModalTitleBar";
export { default as ModalActionBar } from "./components/controls/Modal/ModalActionBar";
export { default as BasicModal } from "./components/controls/Modal";
export { default as Checkbox } from "./components/atoms/Checkbox";
export { default as DashboardChartCard } from "./components/controls/DashboardChartCard";
export { default as SelectDashBoard } from "./components/controls/SelectDashBoard";

export {
  isBinaryField,
  isNumberLikeField,
  isStrLikeField,
  isString,
  isTimeField,
  isEmbedList,
  isSimpleList,
};

export {
  QueryBuilder,
  generateMql,
  generateQueryTemplate,
  getReadableFilterTags,
  getReadableFilterTagInExploreAndQueryResult,
  getFilterType2DimArray,
};
export { QueryBuilderDrawer };
export { FilterTag, FilterBuilder };
export { QueryResult, RecordDetail, DetailData, FilterableQueryResultTable };
export { ExploreQueryResult, NewQueryResult };
export { default as CustomField } from "./components/controls/CustomField";
export { default as QueryList } from "./components/controls/QueryList";
export { MicrosoftSignInButton };
export {
  DynamicFieldForm,
  KmsIput,
  DynamicFormContext,
} from "./components/controls/ConfigurationField";

export { CronEditor };
export { default as Tunnel } from "./components/controls/Tunnel";
