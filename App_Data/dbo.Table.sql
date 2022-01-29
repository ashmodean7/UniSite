CREATE TABLE [dbo].[Table]
(
	[UserID] INT NOT NULL PRIMARY KEY, 
    [Username] VARCHAR(50) NULL, 
    [Password] VARCHAR(50) NULL, 
    [IsAdmin] BIT NOT NULL
)
