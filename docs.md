## Container

HomePage - prop - state: + SiderList + CardList - render: + Header + Content : state cardList + Sider : state siderList

## Component

Header: render Header
Card: render Card
Sider: render Sider
Content: render Content
CardList : - props: cardList - state: - render: list card
SiderList : - props: siderList; - state: - render: list sider
