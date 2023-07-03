interface iresumeItem {
    title: string,
    institutionName: string,
    startDate: Date,
    finishDate: Date | undefined,
    description: string | undefined,
    icon: string,
    inverted: boolean
}

export type { iresumeItem }