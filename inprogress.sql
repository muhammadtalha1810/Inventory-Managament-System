declare @OrderStatus VARCHAR(50) = 'all';
declare @PageNumber INT = 1;
declare @PageSize INT = 25;
--declare @TotalPages INT OUTPUT
DECLARE @sql NVARCHAR(MAX);
SET @sql = '
		DECLARE @TotalRecords INT = (SELECT COUNT(ORDERID) FROM ORDERS);
		SET @TotalPages = CEILING(CAST(@TotalRecords AS FLOAT) / ' + CONVERT(NVARCHAR, @PageSize) + ');
		SELECT 
		ORDERS.ORDERID, 
		ORDERDATETIME , 
		PAYMENTMETHOD, 
		SUM(ORDERITEMS.UNITPRICE * ORDERITEMS.QUANTITY) AS [TOTALPRICE],
		ORDERSTATUS
		FROM ORDERS 
		LEFT JOIN ORDERITEMS ON ORDERS.ORDERID = ORDERITEMS.ORDERID
		WHERE ORDERSTATUS'
		IF @OrderStatus = 'all'
		BEGIN
			SET @sql += ' IN (''initiated'', ''delivered'', ''declined'', ''shipped'')'
		END
		ELSE
		BEGIN
			SET @sql += ' = ''' + @OrderStatus + '''';
		END
		SET @sql += '
		GROUP BY ORDERS.ORDERID, ORDERDATETIME , PAYMENTMETHOD, ORDERSTATUS
		ORDER BY ORDERID
		OFFSET ('+ CONVERT(NVARCHAR, @PageNumber) +' - 1) * '+ CONVERT(NVARCHAR, @PageSize)  +' ROWS
		FETCH NEXT ' + CONVERT(NVARCHAR, @PageSize) + ' ROWS ONLY;'


--PRINT @sql
EXEC sp_executesql @sql;