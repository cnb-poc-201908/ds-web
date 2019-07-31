export const navigation = [
    {
        title: true,
        name: '吉大医疗云平台',
        privilegeCode: 'static',
        wrapper: {
            element: 'span',
            attributes: {}
        },
        class: 'text-center'
    },
    {
        name: '医院管理系统',
        privilegeCode: 'static',
        url: 'tasks/manage-board',
        icon: 'icon-speedometer',
        moduleName: 'manageboardModule',
        moduleParams: {
            canOpenWorkshop: false,
            isOpenedWorkshop: false
        }
    },
    {
        title: true,
        name: '功能列表',
        privilegeCode: 'static',
        wrapper: {
            element: 'span',
            attributes: {}
        },
        class: 'text-center'
    },
    {
        name: '系统管理',
        privilegeCode: 'AAAB0000',
        url: 'tasks/(system-manage/user-manage//sub:user-workshop)',
        icon: 'icon-note',
        children: [
            {
                name: '用户管理',
                privilegeCode: 'AAABAA00',
                url: 'tasks/system-manage/user-manage',
                icon: 'icon-note',
                moduleName: 'userModule',
                moduleParams: {
                    workTabSelected: 0,
                    canClickModifyTab: false,
                    isModifyTabChanged: false, // 工作区是否有修改
                    modifyParams: {},
                    primaryTableData: [],
                    primaryTableTotalRows: 0,
                    isOpenedWorkshop: true,
                    indexSelected: 0
                }
            }]
    }
];
