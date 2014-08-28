
CREATE TABLE [dbo].[TestData](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Action] [nchar](10) NULL,
	[Amount] [int] NOT NULL,
	[MortgageLoan] [int] NOT NULL,
	[CurrentInterestRate] [float] NOT NULL,
	[NumberOfChildren] [int] NOT NULL,
	[HasPartner] [bit] NOT NULL,
	[Age] [int] NOT NULL,
	[MortgageType] [nchar](10) NOT NULL,
	[MortgageDuration] [int] NOT NULL,
	[Income] [int] NOT NULL,
	[HouseValue] [int] NOT NULL,
	[RiskProfile] [int] NOT NULL,
	[TotalSavings] [int] NOT NULL,
 CONSTRAINT [PK_TestData] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

