create procedure sampleprocedure
as
begin
	select top 10 MODELID, MODEL_NAME
	from MODEL
end


exec sampleprocedure